import Layout from '../../components/Layout';
import Post from '../../types/post';
import { getPostFromSlug, getPostSlugs } from '../../util/fetch';
import { getLongFormDate } from '../../util/date';
import Image, { ImageProps } from 'next/image';
import remarkUnwrapImages from 'remark-unwrap-images';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeImgSize from 'rehype-img-size';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';

interface Props {
  post: Post;
}

export default function BlogPost({ post }: Props) {
  const formattedDate = getLongFormDate(new Date(post.date));
  const source = post.body as MDXRemoteSerializeResult;

  return (
    <Layout title={post.title}>
      <div className="my-10">
        <h1 className="text-3xl md:text-4xl font-bold">{post.title}</h1>
        <div className="mt-4">
          <time dateTime={post.date}>{formattedDate}</time>
        </div>
        <div className="mt-6">
          <article
            className="prose max-w-none"
            // dangerouslySetInnerHTML={{ __html: post.body }}
          >
            <MDXRemote
              {...source}
              components={{
                img: props => (
                  // height and width are part of the props, so they get automatically passed here with {...props}
                  // eslint-disable-next-line jsx-a11y/alt-text
                  <Image {...(props as ImageProps)} layout="responsive" loading="lazy" />
                )
              }}
            />
          </article>
        </div>
      </div>
    </Layout>
  );
}

interface Params {
  params: {
    slug: string;
  };
}

export async function getStaticProps({ params }: Params) {
  const post = getPostFromSlug(params.slug);
  post.body = await serialize(post.body as string, {
    mdxOptions: {
      remarkPlugins: [remarkUnwrapImages, remarkGfm],
      // `as any` silences the type error in rehypeImgSize
      rehypePlugins: [rehypeSlug, [rehypeImgSize as any, { dir: 'public' }]],
      format: 'md'
    }
  });

  return { props: { post } };
}

export async function getStaticPaths() {
  const slugs = getPostSlugs();

  return {
    paths: slugs.map(slug => {
      return {
        params: {
          slug
        }
      };
    }),
    fallback: false
  };
}
