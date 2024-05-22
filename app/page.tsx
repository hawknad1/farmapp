import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Growcer - Fresh Grocery Store</title>
      </Head>

      <header className="bg-gray-100 p-4">
        <nav className="flex flex-wrap justify-between items-center container mx-auto">
          <div className="flex items-center space-x-4">
            <div className="text-2xl font-bold">Growcer</div>
            <div className="flex-grow">
              <input
                type="text"
                placeholder="Search here..."
                className="w-full border border-gray-300 rounded p-2"
              />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div>Login</div>
            <div>Cart</div>
          </div>
        </nav>
      </header>

      <main className="container mx-auto py-8">
        <section className="bg-green-100 p-8 rounded-lg flex flex-col md:flex-row items-center">
          <Image
            src="/images/banner.jpg"
            alt="Farmer"
            width={500}
            height={300}
            className="rounded-lg"
          />
          <div className="mt-4 md:mt-0 md:ml-8">
            <h1 className="text-4xl font-bold">
              Don't Miss Out on Tasty Grocery Deals!
            </h1>
            <p className="text-xl mt-4">Save up to 50% off on your first buy</p>
            <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded">
              Shop Now
            </button>
          </div>
        </section>

        <section className="my-8">
          <h2 className="text-3xl font-bold mb-4">Shop By Category</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            <div className="p-4 bg-white rounded-lg shadow">Vegetables</div>
            <div className="p-4 bg-white rounded-lg shadow">Seafood</div>
            <div className="p-4 bg-white rounded-lg shadow">Eggs</div>
            <div className="p-4 bg-white rounded-lg shadow">Baking</div>
            <div className="p-4 bg-white rounded-lg shadow">Cheese</div>
            <div className="p-4 bg-white rounded-lg shadow">Fresh Fruit</div>
            <div className="p-4 bg-white rounded-lg shadow">Meat</div>
            <div className="p-4 bg-white rounded-lg shadow">Milk</div>
            <div className="p-4 bg-white rounded-lg shadow">Drinks</div>
          </div>
        </section>

        <section className="my-8 flex flex-col md:flex-row gap-4">
          <div className="p-8 bg-orange-100 rounded-lg flex-1">
            <h3 className="text-2xl font-bold mb-4">
              Everyday fresh & clean with our products
            </h3>
            <button className="bg-orange-500 text-white px-4 py-2 rounded">
              Shop Now
            </button>
          </div>
          <div className="p-8 bg-green-100 rounded-lg flex-1">
            <h3 className="text-2xl font-bold mb-4">
              Make your breakfast healthy and easy
            </h3>
            <button className="bg-green-500 text-white px-4 py-2 rounded">
              Shop Now
            </button>
          </div>
        </section>

        <section className="my-8">
          <h2 className="text-3xl font-bold mb-4">Farm fresh products</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            <div className="p-4 bg-white rounded-lg shadow">
              <Image
                src="/images/banner.jpg"
                alt="Red Capsicum"
                width={100}
                height={100}
              />
              <h4 className="font-bold mt-2">Red capsicum</h4>
              <p>$20.00</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow">
              <Image
                src="/images/banner.jpg"
                alt="Fresh Seafood"
                width={100}
                height={100}
              />
              <h4 className="font-bold mt-2">Fresh Seafood</h4>
              <p>$20.00</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow">
              <Image
                src="/images/banner.jpg"
                alt="Orange"
                width={100}
                height={100}
              />
              <h4 className="font-bold mt-2">Orange</h4>
              <p>$20.00</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow">
              <Image src="/vercel.svg" alt="Eclair" width={100} height={100} />
              <h4 className="font-bold mt-2">Eclair</h4>
              <p>$20.00</p>
            </div>
            <div className="p-4 bg-white rounded-lg shadow">
              <Image
                src="/images/banner.jpg"
                alt="Raw minced meat"
                width={100}
                height={100}
              />
              <h4 className="font-bold mt-2">Raw minced meat</h4>
              <p>$20.00</p>
            </div>
          </div>
        </section>

        <section className="my-8 bg-red-100 p-8 rounded-lg flex flex-col md:flex-row items-center">
          <Image
            src="/images/banner.jpg"
            alt="Delivery"
            width={100}
            height={100}
            className="rounded-lg"
          />
          <div className="mt-4 md:mt-0 md:ml-8">
            <h2 className="text-3xl font-bold">
              We ship on the following day from 10:00 AM to 08:00 PM
            </h2>
            <p>For purchases over $20.00</p>
            <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded">
              Order Now
            </button>
          </div>
        </section>

        <section className="my-8">
          <h2 className="text-3xl font-bold mb-4">
            Fresh & Flavorful organic goods
          </h2>
          <div className="flex flex-col md:flex-row">
            <Image
              src="/images/banner.jpg"
              alt="Farmer"
              width={200}
              height={200}
              className="rounded-lg"
            />
            <div className="ml-0 md:ml-8 mt-4 md:mt-0">
              <div className="mb-4">
                <h4 className="font-bold">Healthy Cruciferous</h4>
                <p>
                  Cruciferous vegetables belong to the Brassicaceae family...
                </p>
              </div>
              <div className="mb-4">
                <h4 className="font-bold">Fresh Root Vegetables</h4>
                <p>Root vegetables like carrots, beets, and radishes...</p>
              </div>
              <div className="mb-4">
                <h4 className="font-bold">Dry Fruits & Nuts</h4>
                <p>
                  Dry fruits and nuts are a great source of essential
                  nutrients...
                </p>
              </div>
              <div className="mb-4">
                <h4 className="font-bold">Organic Vegetables</h4>
                <p>
                  Organic vegetables are grown without the use of synthetic
                  pesticides...
                </p>
              </div>
              <div className="mb-4">
                <h4 className="font-bold">Natural Citrus Fruits</h4>
                <p>
                  Citrus fruits are known for their high vitamin C content...
                </p>
              </div>
              <div className="mb-4">
                <h4 className="font-bold">Healthy Leafy Green</h4>
                <p>
                  Leafy greens like spinach, kale, and lettuce are
                  nutrient-dense...
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="my-8 bg-gray-100 p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Testimonials</h2>
          <div className="flex items-center">
            <Image
              src="/images/banner.jpg"
              alt="Customer"
              width={50}
              height={50}
              className="rounded-full"
            />
            <div className="ml-4">
              <p className="italic">
                "I love shopping at this grocery store! The wide variety of
                fresh produce and friendly staff make every visit enjoyable and
                convenient."
              </p>
              <div className="mt-2 font-bold">Jack Mahir</div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white p-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between">
          <div>
            <div className="text-2xl font-bold">Growcer</div>
            <div>3 Beach Nook, Hovefort</div>
            <div>example@gmail.com</div>
            <div>10:00 - 18:00, Mon - Sat</div>
          </div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
            <div>
              <h4 className="font-bold mb-2">Account</h4>
              <div>Login</div>
              <div>View Cart</div>
              <div>My Order</div>
              <div>New Product</div>
              <div>Contact Us</div>
            </div>
            <div>
              <h4 className="font-bold mb-2">Company</h4>
              <div>About Us</div>
              <div>Privacy Policy</div>
              <div>Terms & Conditions</div>
              <div>Help</div>
              <div>Careers</div>
            </div>
            <div>
              <h4 className="font-bold mb-2">Payment Methods</h4>
              <div>VISA</div>
              <div>PayPal</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
