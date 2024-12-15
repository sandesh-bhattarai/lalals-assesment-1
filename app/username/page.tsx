'use client';
import Image from "next/image";
import { Controller, useForm, SubmitHandler } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// Define the type for the form data
type UsernameFormData = {
    name: string;
    username: string;
};

const UsernamePage = () => {
    const usernameDTO = Yup.object({
        name: Yup.string().required('Name is required'),
        username: Yup.string()
            .matches(/^[a-zA-Z0-9]+$/, 'Username must be alphanumeric') // Only alphanumeric characters
            .max(20, 'Username must be at most 20 characters') // Maximum length of 20
            .required('Username is required') // Username is required
    });

    const { control, handleSubmit } = useForm<UsernameFormData>({
        resolver: yupResolver(usernameDTO)
    });

    // Define the submit handler with the correct type
    const submitForm: SubmitHandler<UsernameFormData> = (data) => {
        // Handle form submission here
        console.log('Submitted:', { data });
    };

    return (
        <>
            <section className="flex flex-col bg-black min-h-screen space-y-10 gap-6 items-center justify-center">
                <div className="w-[450px] h-[539px] bg-primary-950 rounded-[20px] shadow-[0px_0px_30px_0px_#0000004D] p-10 flex flex-col items-center">
                    <div className="flex flex-col items-center mb-5 pt-5">
                        <div className="logo">
                            <Image
                                width={36}
                                height={35}
                                src={'/logo.svg'}
                                alt="MusicGPT Logo"
                            />
                        </div>
                    </div>

                    <div className="text-center space-y-5">
                        <h1 className="tracking-[0.02em] leading-[31px] font-inter font-medium text-2xl text-[rgba(227, 230, 234, 1)]">
                            Let’s get started.
                        </h1>
                        <h2 className="text-[16px] leading-[21px] font-medium font-inter text-shades-800">
                            How can we call you?
                        </h2>
                    </div>

                    <form onSubmit={handleSubmit(submitForm)} className="space-y-5 w-full py-10">
                        <div>
                            <Controller
                                control={control}
                                name="name"
                                defaultValue=""
                                render={({ field, formState: { errors } }) => (
                                    <>
                                        <input
                                            type="text"
                                            placeholder="Name"
                                            {...field}
                                            className="tracking-[0.02em] w-full px-4 py-3 top-[16px] left-[18px] leading-[19.36px] text-[16px] font-normal rounded-[10px] bg-primary-950 border border-[#363E46] text-[#BBC1CD] placeholder-[#BBC1CD] focus:outline-none focus:ring-2 focus:ring-shades-800"
                                        />
                                        {errors?.name && <p className="text-red-500 text-sm mt-2">{errors.name.message}</p>}
                                    </>
                                )}
                            />
                        </div>

                        <div>
                            <Controller
                                control={control}
                                name="username"
                                defaultValue=""
                                render={({ field, formState: { errors } }) => (
                                    <>
                                        <input
                                            type="text"
                                            placeholder="@username"
                                            {...field}
                                            className="tracking-[0.02em] w-full px-4 py-3 top-[16px] left-[18px] leading-[19.36px] text-[16px] font-normal rounded-[10px] bg-primary-950 border border-[#363E46] text-[#BBC1CD] placeholder-[#BBC1CD] focus:outline-none focus:ring-2 focus:ring-shades-800"
                                        />
                                        {errors?.username && <p className="text-red-500 text-sm mt-2">{errors.username.message}</p>}
                                    </>
                                )}
                            />
                        </div>

                        <button className="flex items-center justify-center gap-[10px] bg-multi-gradient h-[50px] text-white w-full transition-all duration-300 ease-in-out">
                            Start Creating
                        </button>
                    </form>

                    <p className="text-sm text-zinc-500 text-center">
                        You can change your name and username at anytime.
                    </p>
                </div>
            </section>
        </>
    );
};

export default UsernamePage;
