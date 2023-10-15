const MeetAgents = () => {
  const team = [
    {
      name: "Martiana dialan",
      email: "martiana@example.com",
      phone: "0123456789",
    },
    {
      name: "Micheal colorand",
      email: "micheal@exaple.com",
      phone: "0123456789",
    },
    {
      name: "Brown Luis",
      email: "brown@example.com",
      phone: "0123456789",
    },
  ];

  return (
    <section className="px-4 md:px-12 lg:px-20 py-14">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-xl mx-auto sm:text-center">
          <h1 class="text-2xl font-semibold text-center  capitalize lg:text-3xl ">
            Meet The <span class="text-primary ">Agents</span>
          </h1>

          <div class="flex justify-center mx-auto my-4">
            <span class="inline-block w-40 h-1 bg-primary rounded-full"></span>
            <span class="inline-block w-3 h-1 mx-1 bg-primary rounded-full"></span>
            <span class="inline-block w-1 h-1 bg-primary rounded-full"></span>
          </div>

          <p className="text-gray-600">
            Our dedicated team of experienced agents is here to guide you on
            your real estate journey.
          </p>
        </div>
        <div className="mt-12">
          <ul className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {team.map((item, idx) => (
              <li key={idx}>
                <div className="mt-4 text-center space-y-1 bg-gray-100 p-6 rounded-lg">
                  <h4 className="text-lg text-heading font-semibold">
                    {item.name}
                  </h4>
                  <p className="text-primary text-sm">{item.email}</p>
                  <p className="text-body text-sm">{item.phone}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MeetAgents;
