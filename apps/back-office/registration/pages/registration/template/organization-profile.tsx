import Head from 'next/head';
import OrganizationProfilePage from "../../../features/template/pages/organization-profile";
import 'react-form-builder2/dist/app.css';
const OrganizationProfile = () => {

    return (
        <>
            <Head>
                <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.13.0/css/all.css" />
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossOrigin="anonymous" />
            </Head>
            <OrganizationProfilePage />
        </>

    );
}

export default OrganizationProfile;