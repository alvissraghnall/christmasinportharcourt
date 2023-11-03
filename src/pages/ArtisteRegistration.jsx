import { useEffect, useState } from 'react'
import NavbarLight from '../components/NavbarLight';
import { motion, useAnimation } from 'framer-motion';
import client from '../sanity-client';


const FormComponent = () => {
    const controls = useAnimation();

    const [stageName, setStageName] = useState("");
    const [demoSong, setDemoSong] = useState("");
    const [profession, setProfession] = useState("");
    const [twitterLink, setTwitterLink] = useState("")
    const [instagramLink, setInstagramLink] = useState("")

    const startAnimation = async () => {
        await controls.start({
            x: 0, // Adjust the x position as needed
            opacity: 1, // Fade in
            transition: { duration: 0.5 },
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                profession, instagramLink, twitterLink, stageName, demoSong
            })
        };

        const artiste = {
            _type: 'artiste',
            stageName: stageName.value,
            demoSong,
            profession: profession,
            instagramLink, twitterLink
        }

        client.create(artiste)
            .then(() => {
                setLoading(false);
                setIsFormSubmitted(true);
            })

        // fetch(`${import.meta.env.URL}/api/artiste-register`, options)
        //     .then((response) => response.json())
        //     .then((response) => {
        //         console.log(response);
        //         alert("Artiste Registration complete!");
        //     }).catch((err) =>
        //         console.error(err));

    };

    useEffect(() => {
        startAnimation();
    }, []);

    return (
        <>
            <NavbarLight />

            <section className="position-relative pt-5 pb-4">
                {/* Artiste Signup Form */}
                <div className="container d-flex flex-wrap justify-content-center justify-content-xl-start h-100 pt-5">
                    <div className="w-100 align-self-end pt-1 pt-md-4 pb-4" style={{ maxWidth: '526px' }}>
                        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: [0, .4, 1] }} className="text-center text-xl-start">Register as a performing Artiste </motion.h1>
                        <form className="needs-validation" noValidate onSubmit={handleSubmit}>
                            <div className="row">
                                <motion.div initial={{ x: -100, opacity: 0 }} animate={controls} className="col-12">
                                    <div className="position-relative mb-4">
                                        <label htmlFor="stageName" className="form-label fs-base">Stage Name</label>
                                        <input type="text" id="stageName" value={stageName} onChange={(e) => setStageName(e.target.value)} className="form-control form-control-lg" required />
                                        <div className="invalid-feedback position-absolute start-0 top-100">Please enter your Stage Name!</div>
                                    </div>
                                </motion.div>
                            </div>

                            <div className="row">
                                <motion.div initial={{ x: -100, opacity: 0 }} animate={controls} className="col-12">
                                    <div className="position-relative mb-4">
                                        <label htmlFor="demoSong" className="form-label fs-base">Demo Song Link</label>
                                        <input value={demoSong} type="text" id="demoSong" onChange={(e) => setDemoSong(e.target.value)} className="form-control form-control-lg" required />
                                        <div className="invalid-feedback position-absolute start-0 top-100">Please enter your Demo Song!</div>
                                    </div>
                                </motion.div>
                            </div>

                            {/*<div className="row">
                                <motion.div initial={{ x: -100, opacity: 0 }} animate={controls} className="col-12">
                                    <div className="position-relative mb-4">
                                        <label htmlFor="instagramLink" className="form-label fs-base">Instagram Profile Link</label>
                                        <input value={instagramLink} type="text" id="instagramLink" onChange={(e) => setInstagramLink(e.target.value)} className="form-control form-control-lg" required />
                                        <div className="invalid-feedback position-absolute start-0 top-100">Please enter your Fecebook Profile Link!</div>
                                    </div>
                                </motion.div>
                            </div> */}

                            <div className="row">
                                <motion.div initial={{ x: -100, opacity: 0 }} animate={controls} className="col-12">
                                    <div className="position-relative mb-4">
                                        <label htmlFor="instagramLink" className="form-label fs-base">Instagram Profile Link</label>
                                        <input value={instagramLink} type="text" id="instagramLink" onChange={(e) => setInstagramLink(e.target.value)} className="form-control form-control-lg" required />
                                        <div className="invalid-feedback position-absolute start-0 top-100">Please enter your Fecebook Profile Link!</div>
                                    </div>
                                </motion.div>
                            </div>

                            <div className="row">
                                <motion.div initial={{ x: -100, opacity: 0 }} animate={controls} className="col-12">
                                    <div className="position-relative mb-4">
                                        <label htmlFor="twitterLink" className="form-label fs-base">Twitter Profile link</label>
                                        <input value={twitterLink} type="text" id="twitterLink" onChange={(e) => setTwitterLink(e.target.value)} className="form-control form-control-lg" required />
                                        <div className="invalid-feedback position-absolute start-0 top-100">Please enter your Twitter Profile link!</div>
                                    </div>
                                </motion.div>
                            </div>

                            <div className="row">
                                <motion.div initial={{ x: -100, opacity: 0 }} animate={controls} className="col-12">
                                    <div className="position-relative mb-4">
                                        <label htmlFor="profession" className="form-label fs-base">Select your profession</label>
                                        <select id="profession" value={profession} style={{ cursor: "pointer" }} onChange={(e) => setProfession(e.target.value)} className="form-select form-select-lg" required>
                                            <option value='' disabled>Choose Profession</option>
                                            <option value="dj">Disc Jockey (DJ) </option>
                                            <option value="comedian">Stand-up Comedian</option>
                                            <option value="musician">Musician</option>
                                        </select>
                                        <div className="invalid-feedback position-absolute start-0 top-100">Please enter your profession!</div>
                                    </div>
                                </motion.div>
                            </div>

                            <motion.div initial={{ x: -100, opacity: 0 }} animate={controls} className="col-12">
                                <div className="position-relative mb-4">
                                    <label htmlFor="tnc" className="form-label fs-base">TnC of Artist Selection</label>
                                    <p>By submitting this form, you agree to the following Terms and Conditions for Artist Selection:</p>
                                    <ul id="tnc">
                                        <li>All information provided is accurate and truthful.</li>
                                        <li>Your presence performing at Christmas in Port Harcourt stage can sell at least 10 tickets to your fans and appeal to more.</li>
                                        <li>You will actively promote Christmas in Port Harcourt on all your social media channels.</li>
                                        <li>The selection process is at the discretion of the organizers.</li>
                                        <li>Artistes are expected to abide by the rules and regulations of the event.</li>
                                        <li>The organizers reserve the right to disqualify any artist for violation of rules.</li>
                                        <li>Your songs and videos would be used for promotional sevices by Christmas in Port Harcourt.</li>
                                    </ul>
                                </div>
                            </motion.div>


                            <button type='submit' className="btn btn-primary btn-md btn-block waves-effect text-center m-b-20" style={{ width: "100%" }}>
                                Register
                            </button>

                        </form>
                    </div>
                </div>
                {/* Background */}
                <div className="position-fixed top-0 end-0 w-50 h-100 bg-position-center bg-repeat-0 bg-size-cover d-none d-xl-block" style={{ backgroundImage: 'url(assets/img/closedbg.jpg)' }} />

            </section>

        </>
    );
};

export default FormComponent;
