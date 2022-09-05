import { Logo, NavbarTwoColumns, NavMenu, Section } from 'astro-boilerplate-components';
import { Hits, Hit, SearchBox } from './Search';
import algoliasearch from 'algoliasearch';
import { InstantSearch } from 'react-instantsearch-hooks';

const Navbar = () => {
	const searchClient = algoliasearch(import.meta.env.PUBLIC_ALGOLIA_INDEX, import.meta.env.PUBLIC_ALGOLIA_SEARCHKEY);
	return (
		<InstantSearch searchClient={searchClient} indexName="Blog">
			<div className="sticky bg-slate-900 z-10 top-0">
				<Section>
					<NavbarTwoColumns>
						<a href="/">
							<Logo
								icon={
									<svg
										className="mr-1 h-10 w-10 stroke-cyan-600"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="none"
										strokeWidth="1.5"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<path d="M0 0h24v24H0z" stroke="none" />
										<rect x="3" y="12" width="6" height="8" rx="1" />
										<rect x="9" y="8" width="6" height="12" rx="1" />
										<rect x="15" y="4" width="6" height="16" rx="1" />
										<path d="M4 20h14" />
									</svg>
								}
								name="Noah's Digital Garden"
							/>
						</a>

						<NavMenu>
							<a className="mt-2" href="/posts">Garden</a>
							<a  className="mt-2" href="https://github.com/nheingit" target="_blank">
								GitHub
							</a>
							<a className="mt-2" href="https://twitter.com/nheindev" target="_blank">
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
