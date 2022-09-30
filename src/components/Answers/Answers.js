import React from 'react';

const Answers = () => {
    return (
        <section className="w-full p-6 pb-0">
            <h1 className="my-5 text-xl md:text-3xl font-semibold text-center">Frequently Asked Questions</h1>
            <div className="grid grid-cols-1 gap-4 md:gap-5">
                <div className="collapse collapse-arrow">
                    <input type="checkbox" className="peer" />
                    <div
                        className="collapse-title text-dracula_color font-bold border-2 border-white rounded-lg rounded-b-none peer-checked:bg-[#506ec080]">
                        How Does React Works?
                    </div>
                    <div
                        className="peer-checked:pt-2 collapse-content md:text-base border-2 border-white rounded-lg rounded-t-none">
                        ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering code.
                    </div>
                </div>
                <div className="collapse collapse-arrow">
                    <input type="checkbox" className="peer" />
                    <div
                        className="collapse-title text-dracula_color font-bold border-2 border-white rounded-lg rounded-b-none peer-checked:bg-[#506ec080]">
                        Props vs State
                    </div>
                    <div
                        className="peer-checked:pt-2 collapse-content md:text-base border-2 border-white rounded-lg rounded-t-none">
                        Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components.
                    </div>
                </div>
                <div className="collapse collapse-arrow">
                    <input type="checkbox" className="peer" />
                    <div
                        className="collapse-title text-dracula_color font-bold border-2 border-white rounded-lg rounded-b-none peer-checked:bg-[#506ec080]">
                        Usage of useEffect (except fetching)
                    </div>
                    <div
                        className="peer-checked:pt-2 collapse-content md:text-base border-2 border-white rounded-lg rounded-t-none">
                        As a Side Effect
                        <br />
                        Can be used directly updating the DOM.
                        <br />
                        Can be used as a side effect for timers.
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Answers;