import {
  readFileSync,
  writeFileSync,
  existsSync,
  mkdirSync,
  cpSync,
  rmSync,
} from 'node:fs';
import sass from 'sass';

/*
 * Create Distribution Folder (if not exists)
 */
if (!existsSync('dist')) {
  mkdirSync('dist');
}

/*
 * Compile SCSS to CSS
 */
const stylesCss: string = sass.compile('./src/styles.scss').css;
writeFileSync('./dist/styles.css', stylesCss);

/*
 * Create Final `index.html` File
 */
let indexHtml = readFileSync('./src/index.html', {
  encoding: 'utf8',
  flag: 'r',
});

// insert style sheet link
indexHtml = indexHtml.replace(
  '<!-- Style Sheets -->',
  '<link rel="stylesheet" href="styles.css">'
);

function replaceComponents() {
  // Find all elements with data-component-type attribute
  const components: RegExpMatchArray | null = indexHtml.match(
    /<[^>]+data-component-type[^>]+><\/div>/g
  );

  if (components === null) return;

  console.log('>>> Components to replace');
  console.log(components);

  // Iterate through each matching element
  components.forEach((element: string) => {
    // Get the component type from the data attribute
    const componentType = element.match(/data-component-type="([^"]+)"/)![1];
    // console.log('>>> Component Type:', componentType);

    // Fetch the corresponding template (assuming templates are stored in separate files)
    let template: string = readFileSync(
      `./src/components/${componentType}/${componentType}.html`,
      {
        encoding: 'utf8',
        flag: 'r',
      }
    );

    // Replace the content of the element with the template
    indexHtml = indexHtml.replace(element, template);
  });
}
replaceComponents();

writeFileSync('./dist/index.html', indexHtml);

/*
 * Copy `assets` Folder
 */
cpSync('./src/assets', './dist/assets', { recursive: true });

/*
 * Delete `out` Folder
 */
rmSync('./out', { recursive: true, force: true });

console.log('>>> Build Complete! <<<');
