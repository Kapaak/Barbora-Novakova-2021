//libs
import Head from "next/head";

const HeadSelector = () => {
	return (
		<Head>
			<title>Barbora Novakova | portfolio</title>
			<meta name="author" content="Barbora Novakova" />
			<meta name="keywords" content="Barbora Novakova, portfolio" />
			<meta
				name="description"
				content="Ahoj, jmenuji se Barbora Nováková a toto je mé portfolio. Jsem studentkou architektury a baví mě nejvíce veřejný prostor, urbanismus, obnova a rekonstrukce památek. Dále se zajímám o grafický design a webový design."
			/>
			<meta
				name="google-site-verification"
				content="l9sx8TIg--Partzz-3vfD2IVjTGz1mHzJH9hihW5DFQ"
			/>
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link
				rel="preconnect"
				href="https://fonts.gstatic.com"
				crossOrigin="true"
			/>
			<link
				href="https://fonts.googleapis.com/css2?family=Righteous&family=Roboto:wght@400;500&display=swap"
				rel="stylesheet"
			/>
		</Head>
	);
};

export default HeadSelector;
