import { technologies, ITechs } from 'src/testData/technologies';
import { urls, IUrls } from 'src/testData/urlObjects';

/** Main function */
function main() {
  console.log('---------- Cool Programing ----------\n');
  const result = techClassifier(urls, technologies);
  console.log('result: ', result);
}

main();

/** Clasify url objects into their correspondend technology */
function techClassifier(uData: IUrls[], techs: ITechs[]) {
  interface IClassification {
    [key: string]: IUrls[];
  }
  let classification: IClassification = {};
  // iterate urls
  for (let i = 0; i < uData.length; i++) {
    const currentUrl = uData[i];
    let techFounded = false;
    // Iterate techs
    for (let j = 0; j < techs.length; j++) {
      let domSuccess = false;
      let patSuccess = false;
      let qSuccess = false;
      const currentTech = techs[j];
      const { dom: domCriteria, pat: patCriteria, q: qCriteria } = currentTech.criteria;
      // validate domain criterias
      if (domCriteria) {
        domSuccess = domCriteria?.test(currentUrl.dom);
      } else {
        domSuccess = true;
      }
      // validate path criterias
      if (patCriteria) {
        patSuccess = patCriteria.test(currentUrl.pat);
      } else {
        patSuccess = true;
      }
      // validate query strings criterias
      if (qCriteria) {
        qSuccess = qCriteria.test(currentUrl.q);
      } else {
        qSuccess = true;
      }
      // Push url object to correspondend technology
      if (domSuccess && patSuccess && qSuccess) {
        const techAlreadyExist = classification[currentTech.name]?.length > 0;
        classification = {
          ...classification,
          [currentTech.name]: techAlreadyExist
            ? [...classification[currentTech.name], currentUrl]
            : [currentUrl]
        };
        techFounded = true;
        break;
      }
    }
    if (!techFounded) {
      classification = {
        ...classification,
        default: classification?.default ? [...classification.default, currentUrl] : [currentUrl]
      };
    }
  }
  return classification;
}
