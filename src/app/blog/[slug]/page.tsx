import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import Layout from '../../../components/layout';
import { getAmericanDate, getPostFromSlug } from '../../../lib/utils';
import rehypeSlug from 'rehype-slug';
import Image, { ImageProps } from 'next/image';
import rehypeImgSize from 'rehype-img-size';
import rehypeImageSize from '../../../lib/rehype-image-size';

interface Props {
  params: {
    slug: string;
  };
}

export default function BlogPost({ params }: Props) {
  const post = getPostFromSlug(params.slug);

  return (
    <Layout>
      <h1 className="text-3xl font-bold dark:text-white mb-2">{post.title}</h1>

      <p className="mb-8">
        <time dateTime={post.date} className="text-gray-500 dark:text-gray-400">
          {getAmericanDate(new Date(post.date))}
        </time>
      </p>

      <article className="prose dark:prose-invert">
        <MDXRemote
          source={post.body}
          options={{
            mdxOptions: {
              // rehypePlugins: [rehypeSlug, [rehypeImgSize, { dir: 'public' }]],
              rehypePlugins: [rehypeSlug, [rehypeImageSize, { root: 'public' }]],
              remarkPlugins: [remarkGfm]
            }
          }}
          components={{
            img: (props) => (
              <Image
                {...(props as ImageProps)}
                alt={props.alt || 'Image'}
                className="rounded-lg"
                layout="responsive"
                loading="lazy"
              />
            )
          }}
        />
      </article>

      {/* <h1 className="text-3xl font-bold dark:text-white">{post.title}</h1>
      <div className="mt-4 dark:text-white">
        <time dateTime={post.date}>{getAmericanDate(new Date(post.date))}</time>
      </div>
      <div className="mt-6">
        <article
          className="prose dark:prose-invert max-w-none"
          // dangerouslySetInnerHTML={{ __html: post.body }}
        >
          <MDXRemote source={post.body} />
        </article>
      </div> */}
    </Layout>
  );
}
