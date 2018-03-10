import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Header = () => (
    <div>
        <Link href="https://evitalires.github.io/hello-next">
          <a style={linkStyle}>Home</a>
        </Link>
        <Link href="https://evitalires.github.io/hello-next/blog">
          <a style={linkStyle}>Blog</a>
        </Link>
        <Link href="https://evitalires.github.io/hello-next/markDown">
          <a style={linkStyle}>MarkDown</a>
        </Link>
    </div>
)

export default Header
