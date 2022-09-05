import { MarkdownInstance, IFrontmatter } from 'astro-boilerplate-components';
import algoliasearch from 'algoliasearch';
export async function saveObjectInAlgolia(postsArr: MarkdownInstance<IFrontmatter>[]) {
	const searchClient = algoliasearch(import.meta.env.ALGOLIA_INDEX, import.meta.env.ALGOLIA_ADMINKEY);
	const index = searchClient.initIndex('Blog');
	postsArr.forEach((post) => {
		index.saveObject({
			objectID: post.url,
			title: post.frontmatter.title,
			description: post.frontmatter.description,
			content: post.rawContent()
		});
	});
}
