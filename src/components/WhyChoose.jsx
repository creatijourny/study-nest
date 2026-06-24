

const Features = () => {
    return (
        <div>
            <section className="max-w-7xl mx-auto py-4 mt-8 bg-slate-50">
                <div className="px-4">
                    <div className="text-center mb-7">
                        <h2 className="text-3xl font-bold">
                            Why Choose StudyNest?
                        </h2>
                        <p className="text-gray-500">
                            Everything you need for a productive study session.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6">

                        <div className="bg-white p-8 rounded-xl shadow-sm">
                            <div className="text-4xl mb-4">📚</div>
                            <h3 className="font-bold text-xl mb-2">
                                Quiet Study Spaces
                            </h3>
                            <p className="text-gray-600">
                                Focus without distractions in carefully designed
                                study environments.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-sm">
                            <div className="text-4xl mb-4">📚</div>
                            <h3 className="font-bold text-xl mb-2">
                                Wide Range of Book Collections
                            </h3>
                            <p className="text-gray-600">
                                Explore thousands of books across academic,
                                fiction, non-fiction, research, and reference
                                categories to support every learning journey.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-sm">
                            <div className="text-4xl mb-4">⚡</div>
                            <h3 className="font-bold text-xl mb-2">
                                Instant Booking
                            </h3>
                            <p className="text-gray-600">
                                Reserve a room in seconds with real-time
                                availability and conflict checking.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-sm">
                            <div className="text-4xl mb-4">🤝</div>
                            <h3 className="font-bold text-xl mb-2">
                                Solo & Group Rooms
                            </h3>
                            <p className="text-gray-600">
                                Choose the perfect room for individual study,
                                team projects, or discussion sessions.
                            </p>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Features;