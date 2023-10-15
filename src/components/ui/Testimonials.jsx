const Testimonials = () => {
  return (
    <section class="px-4 md:px-12 lg:px-20 py-16">
      <div class="container px-6 py-10 mx-auto">
        <h1 class="text-2xl font-semibold text-center  capitalize lg:text-3xl ">
          What our <span class="text-primary ">clients</span> say
        </h1>

        <div class="flex justify-center mx-auto mt-6">
          <span class="inline-block w-40 h-1 bg-primary rounded-full"></span>
          <span class="inline-block w-3 h-1 mx-1 bg-primary rounded-full"></span>
          <span class="inline-block w-1 h-1 bg-primary rounded-full"></span>
        </div>

        <p class="max-w-2xl mx-auto mt-6 text-center text-body">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt
          ex placeat modi magni quia error alias, adipisci rem similique, at
          omnis eligendi optio eos harum.
        </p>

        <div class="grid grid-cols-1 gap-8 mx-auto mt-8 lg:grid-cols-2 xl:mt-10 max-w-7xl">
          <div class="p-6 bg-gray-100 rounded-lg  md:p-8">
            <p class="leading-loose text-body">
              “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
              quibusdam ducimus libero ad tempora doloribus expedita laborum
              saepe voluptas perferendis delectus assumenda rerum, culpa aperiam
              dolorum, obcaecati corrupti aspernatur a.”.
            </p>

            <div class="flex items-center mt-6">
              <img
                class="object-cover rounded-full w-14 h-14"
                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                alt=""
              />

              <div class="mx-4">
                <h1 class="font-semibold text-primary">Robbert</h1>
                <span class="text-sm text-body">CTO, Robert Consultency</span>
              </div>
            </div>
          </div>

          <div class="p-6 bg-gray-100 rounded-lg  md:p-8">
            <p class="leading-loose text-body">
              “Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore
              quibusdam ducimus libero ad tempora doloribus expedita laborum
              saepe voluptas perferendis delectus assumenda rerum, culpa aperiam
              dolorum, obcaecati corrupti aspernatur a.”.
            </p>

            <div class="flex items-center mt-6">
              <img
                class="object-cover rounded-full w-14 h-14"
                src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
              />

              <div class="mx-4">
                <h1 class="font-semibold text-primary">Mia Brown</h1>
                <span class="text-sm text-body">
                  Marketing Manager at Stech
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
