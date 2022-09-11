import algoliasearch from 'algoliasearch';
import {
  Logo,
  NavbarTwoColumns,
  NavMenu,
  Section,
} from 'astro-boilerplate-components';
import { InstantSearch } from 'react-instantsearch-hooks';

import { Hit, Hits, SearchBox } from './Search';

const Navbar = () => {
  const searchClient = algoliasearch(
    import.meta.env.PUBLIC_ALGOLIA_INDEX,
    import.meta.env.PUBLIC_ALGOLIA_SEARCHKEY
  );
  return (
    <InstantSearch searchClient={searchClient} indexName="Blog">
      <div className="sticky top-0 z-10 bg-slate-900">
        <Section>
          <NavbarTwoColumns>
            <a href="/">
              <Logo
                icon={
                  <img
                    className="h-12 w-12"
                    alt="logo with the letters NH"
                    src="/assets/images/NHLogo.png"
                  />
                }
                name="Noah's Digital Garden"
              />
            </a>

            <NavMenu>
              <a className="mt-2" href="/posts">
                Garden
              </a>
              <a
                className="mt-2"
                href="https://github.com/nheingit"
                target="_blank"
              >
                GitHub
              </a>
              <a
                className="mt-2"
                href="https://twitter.com/nheindev"
                target="_blank"
              >
                Twitter
              </a>
              <div>
                <SearchBox />
                <Hits hitComponent={Hit} />
              </div>
            </NavMenu>
          </NavbarTwoColumns>
        </Section>
      </div>
    </InstantSearch>
  );
};

export { Navbar };
