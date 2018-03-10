import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Header = () => (
    <div>
        <Link href="/">
          <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/blog">
          <a style={linkStyle}>Blog</a>
        </Link>
        <Link href="/markDown">
          <a style={linkStyle}>MarkDown</a>
        </Link>
    </div>
)

export default Header