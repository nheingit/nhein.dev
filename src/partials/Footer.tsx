import { Section } from 'astro-boilerplate-components';

import { AppConfig } from '@/utils/AppConfig';

const Footer = () => (
  <Section>
    <div className="border-t border-gray-600 pt-5">
      <div className="text-sm text-gray-200">
        {[
          `\u00A9 Copyright${new Date().getFullYear()}`,
          ' by ',
          AppConfig.site_name,
        ]}
      </div>
    </div>
  </Section>
);

export { Footer };
