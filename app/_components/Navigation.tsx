import Link from 'next/link';

type Props = {};
function Navigation({}: Props) {
  return (
    <>
      <ul>
        <Link href="/home">Home</Link>
        <Link href="/cabins">Cabins</Link>
        <Link href="/about">About</Link>
        <Link href="/account">Your account</Link>
      </ul>
    </>
  );
}
export default Navigation;
