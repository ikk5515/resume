import { homepage, version } from '../package.json';

import { IFooter } from '../component/footer/IFooter';
import dependencies from '../package-lock.json';

const footer: IFooter.Payload = {
  version,
  github: homepage,
  nextVersion: dependencies.version,
  reactVersion: dependencies.version,
  bootstrapVersion: dependencies.version,
};

export default footer;
