import Image from 'next/image';

const LoginPage = () => {

    return (
        <div>
            <div className="tw-relative tw-bg-white tw-w-10/12 md:tw-w-1/2 mx-auto tw-mt-10">
                <span className=" tw-bg-white tw-p-3 tw-inline-block tw-border tw-rounded-full tw-absolute tw-top-0 tw-left-1/2 tw--translate-x-1/2 tw--translate-y-1/2">
                    <Image src="/images/EGP logo.png" alt="EGP logo" width={64} height={64} />
                </span>

                <div className="tw-flex tw-flex-wrap  tw-flex-col-reverse md:tw-flex-row tw-pt-12">
                    <div className="sm:w-full md:tw-w-1/2 tw-px-4">
                        <h2 className="tw-text-2xl tw-text-center tw-mb-5">Login</h2>
                        <form >
                            <div className="tw-mb-5">
                                <label className="form-label">Username</label>
                                <input type="text" className="form-control hover:tw-border-[#1d2861] focus:tw-border-[#1d2861]" name="example-text-input" placeholder="Enter your username" />
                            </div>
                            <div className="tw-mb-5">
                                <label className="form-label">Password</label>
                                <input type="text" className="form-control hover:tw-border-[#1d2861] focus:tw-border-[#1d2861]" name="example-password-input" placeholder="Enter your password" />
                            </div>
                            <div className='tw-mb-5'>
                                <input type="submit" className="btn btn-primary tw-w-full tw-bg-[#1d2861]" value="Log in" />
                            </div>

                        </form>
                        <p className="tw-text-center tw-mb-5">
                            <a className="hover:tw-no-underline" href="./haha baby">I forgot my password</a>
                        </p>

                    </div>
                    <div className="md:tw-w-1/2 tw-px-4">
                        <h2 className="tw-text-2xl tw-text-center tw-mb-5">Welcome to EGP</h2>
                        <div className="tw-flex tw-items-center">
                            <p className="tw-mb-5 tw-text-xs tw-text-justify">
                                Around the world, governments have been traditionally embracing ICT to improve the efficiency and
                                effectiveness with which they deliver services to their citizens and provide timely and accurate
                                access to information.These initiatives span the entire spectrum of government responsibilities and
                                are generically termed eGovernment initiatives (or e-Governance). One of the most successful
                                applications of ICT is in the area of public procurement, known as Electronic
                                Government Procurement (e-GP).
                            </p>
                        </div>
                    </div>
                </div>

            </div>
            <div className='tw-mt-3'>
                <p className='tw-text-xs tw-text-center tw-mb-2'>
                    © Copyright 2022 FPPA
                </p>


                <div className="tw-text-xs tw-flex tw-items-center tw-justify-center tw-mb-5">
                    <span>
                        Powered By: &nbsp;
                    </span>
                    <Image src="/images/Perago logo.png" alt="Perago" width={70} height={19} />
                </div>
            </div>


        </div>

    );

}

export default LoginPage;