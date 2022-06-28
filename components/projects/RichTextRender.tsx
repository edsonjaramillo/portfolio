import { NodeRendererType, RichText } from '@graphcms/rich-text-react-renderer';
import { BlurImage } from '@/components/index';

interface RichTextRenderProps {
  content: any;
}

const richTextOverrides: NodeRendererType = {
  h1: ({ children }) => <h1 className='post__h1'>{children}</h1>,
  h2: ({ children }) => <h2 className='post__h2'>{children}</h2>,
  h3: ({ children }) => <h3 className='post__h3'>{children}</h3>,
  p: ({ children }) => <p className='post__p'>{children}</p>,
  a: ({ children, href }) => (
    <a
      target='_blank'
      rel='noreferrer external nofollow noopener'
      className='post__link'
      href={href}>
      {children}
    </a>
  ),
  ul: ({ children }) => <ul className='post__ul'>{children}</ul>,
  ol: ({ children }) => <ol className='post__ol'>{children}</ol>,
  li: ({ children }) => <li className='post__li'>{children}</li>,
  code: ({ children }) => <code className='post__code'>{children}</code>,
  code_block: ({ children }) => <pre className='post__codeblock'>{children}</pre>,
  img: ({ src, width, height, altText }) => (
    <div className='post__image'>
      <BlurImage src={src!} width={width} height={height} layout='responsive' alt={altText} />
    </div>
  ),
  video: ({ src, title }) => (
    <video id='demo' src={src} title={title} controls width='100%' height='100%' />
  ),
};

const RichTextRender = ({ content }: RichTextRenderProps) => (
  <RichText content={content} renderers={richTextOverrides} />
);
export default RichTextRender;
