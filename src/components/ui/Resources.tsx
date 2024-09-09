import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  FunnelIcon,
  Squares2X2Icon,
} from "@heroicons/react/20/solid";

interface SortOption {
  name: string;
  href: string;
  current: boolean;
}

interface SubCategory {
  name: string;
  href: string;
}

interface Product {
  id: number;
  name: string;
  category: string;
  // price: string;
  imageSrc: string;
  imageAlt: string;
}

const sortOptions: SortOption[] = [
  { name: "Most Popular", href: "#", current: true },
  { name: "Best Rating", href: "#", current: false },
  { name: "Newest", href: "#", current: false },
  { name: "Price: Low to High", href: "#", current: false },
  { name: "Price: High to Low", href: "#", current: false },
];

const subCategories: SubCategory[] = [
  { name: "PYQss", href: "#" },
  { name: "Books", href: "#" },
  { name: "Notes", href: "#" },
  { name: "Textbooks", href: "#" },
  { name: "Labs", href: "#" },
];

const products: Product[] = [
  // PYQss (3 products)
  {
    id: 1,
    name: "PYQs Bag 1",
    category: "PYQss",
    // price: "$50",
    imageSrc: "https://via.placeholder.com/150",
    imageAlt: "PYQs Bag 1",
  },
  {
    id: 2,
    name: "PYQs Bag 2",
    category: "PYQss",
    // price: "$55",
    imageSrc: "https://via.placeholder.com/150",
    imageAlt: "PYQs Bag 2",
  },
  {
    id: 3,
    name: "PYQs Bag 3",
    category: "PYQss",
    // price: "$60",
    imageSrc: "https://via.placeholder.com/150",
    imageAlt: "PYQs Bag 3",
  },
  // Books (5 products)
  {
    id: 4,
    name: "Books 1",
    category: "Books",
    // price: "$70",
    imageSrc: "https://via.placeholder.com/150",
    imageAlt: "Books 1",
  },
  {
    id: 5,
    name: "Books 2",
    category: "Books",
    // price: "$75",
    imageSrc: "https://via.placeholder.com/150",
    imageAlt: "Books 2",
  },
  {
    id: 6,
    name: "Books 3",
    category: "Books",
    // price: "$80",
    imageSrc: "https://via.placeholder.com/150",
    imageAlt: "Books 3",
  },
  {
    id: 7,
    name: "Books 4",
    category: "Books",
    // price: "$85",
    imageSrc: "https://via.placeholder.com/150",
    imageAlt: "Books 4",
  },
  {
    id: 8,
    name: "Books 5",
    category: "Books",
    // price: "$90",
    imageSrc: "https://via.placeholder.com/150",
    imageAlt: "Books 5",
  },
  // Notes (2 products)
  {
    id: 9,
    name: "Note 1",
    category: "Notes",
    // price: "$90",
    imageSrc: "https://via.placeholder.com/150",
    imageAlt: "Note 1",
  },
  {
    id: 10,
    name: "Note 2",
    category: "Notes",
    // price: "$95",
    imageSrc: "https://via.placeholder.com/150",
    imageAlt: "Note 2",
  },
  // Textbooks (6 products)
  {
    id: 11,
    name: "Textbook 1",
    category: "Textbooks",
    // price: "$30",
    imageSrc: "https://via.placeholder.com/150",
    imageAlt: "Textbook 1",
  },
  {
    id: 12,
    name: "Textbook 2",
    category: "Textbooks",
    // price: "$35",
    imageSrc: "https://via.placeholder.com/150",
    imageAlt: "Textbook 2",
  },
  {
    id: 13,
    name: "Textbook 3",
    category: "Textbooks",
    // price: "$40",
    imageSrc: "https://via.placeholder.com/150",
    imageAlt: "Textbook 3",
  },
  {
    id: 14,
    name: "Textbook 4",
    category: "Textbooks",
    // price: "$45",
    imageSrc: "https://via.placeholder.com/150",
    imageAlt: "Textbook 4",
  },
  {
    id: 15,
    name: "Textbook 5",
    category: "Textbooks",
    // price: "$50",
    imageSrc: "https://via.placeholder.com/150",
    imageAlt: "Textbook 5",
  },
  {
    id: 16,
    name: "Textbook 6",
    category: "Textbooks",
    // price: "$55",
    imageSrc: "https://via.placeholder.com/150",
    imageAlt: "Textbook 6",
  },
  // Labs (8 products)
  {
    id: 17,
    name: "Lab 1",
    category: "Labs",
    // price: "$40",
    imageSrc: "https://via.placeholder.com/150",
    imageAlt: "Lab 1",
  },
  {
    id: 18,
    name: "Lab 2",
    category: "Labs",
    // price: "$45",
    imageSrc: "https://via.placeholder.com/150",
    imageAlt: "Lab 2",
  },
  {
    id: 19,
    name: "Lab 3",
    category: "Labs",
    // price: "$50",
    imageSrc: "https://via.placeholder.com/150",
    imageAlt: "Lab 3",
  },
  {
    id: 20,
    name: "Lab 4",
    category: "Labs",
    // price: "$55",
    imageSrc: "https://via.placeholder.com/150",
    imageAlt: "Lab 4",
  },
  {
    id: 21,
    name: "Lab 5",
    category: "Labs",
    // price: "$60",
    imageSrc: "https://via.placeholder.com/150",
    imageAlt: "Lab 5",
  },
  {
    id: 22,
    name: "Lab 6",
    category: "Labs",
    // price: "$65",
    imageSrc: "https://via.placeholder.com/150",
    imageAlt: "Lab 6",
  },
  {
    id: 23,
    name: "Lab 7",
    category: "Labs",
    // price: "$70",
    imageSrc: "https://via.placeholder.com/150",
    imageAlt: "Lab 7",
  },
  {
    id: 24,
    name: "Lab 8",
    category: "Labs",
    // price: "$75",
    imageSrc: "https://via.placeholder.com/150",
    imageAlt: "Lab 8",
  },
];

function classNames(...classes: (string | boolean | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}

const Resources: React.FC = () => {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <div className="bg-white relative z-20 mt-12">
      <div>
        {/* Mobile filter dialog */}
        <Dialog
          open={mobileFiltersOpen}
          onClose={setMobileFiltersOpen}
          className="relative z-40 lg:hidden"
        >
          <DialogBackdrop
            transition
            className="fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
          />

          <div className="fixed inset-0 z-40 flex">
            <DialogPanel
              transition
              className="relative ml-auto flex h-full w-full max-w-xs transform flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:translate-x-full"
            >
              <div className="flex items-center justify-between px-4">
                <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(false)}
                  className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                </button>
              </div>

              {/* Filters */}
              <form className="mt-4 border-t border-gray-200">
                <h3 className="sr-only">Categories</h3>
                <ul role="list" className="px-2 py-3 font-medium text-gray-900">
                  {subCategories.map((category) => (
                    <li key={category.name}>
                      <button
                        type="button"
                        onClick={() => setSelectedCategory(category.name)}
                        className="block px-2 py-3"
                      >
                        {category.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </form>
            </DialogPanel>
          </div>
        </Dialog>

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">
              Resources
            </h1>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <MenuButton className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sort
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    />
                  </MenuButton>
                </div>

                <MenuItems
                  transition
                  className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                >
                  <div className="py-1">
                    {sortOptions.map((option) => (
                      <MenuItem key={option.name}>
                        <a
                          href={option.href}
                          className={classNames(
                            option.current
                              ? "font-medium text-gray-900"
                              : "text-gray-500",
                            "block px-4 py-2 text-sm data-[focus]:bg-gray-100"
                          )}
                        >
                          {option.name}
                        </a>
                      </MenuItem>
                    ))}
                  </div>
                </MenuItems>
              </Menu>

              <button
                type="button"
                className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
              >
                <span className="sr-only">View grid</span>
                <Squares2X2Icon aria-hidden="true" className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(true)}
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon aria-hidden="true" className="h-5 w-5" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <form className="hidden lg:block">
                <h3 className="sr-only">Categories</h3>
                <ul
                  role="list"
                  className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900"
                >
                  {subCategories.map((category) => (
                    <li key={category.name}>
                      <button
                        type="button"
                        onClick={() => setSelectedCategory(category.name)}
                      >
                        {category.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </form>

              {/* Product grid */}
              <div className="lg:col-span-3">
                <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                  {filteredProducts.map((product) => (
                    <a key={product.id} href="#" className="group">
                      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                        <img
                          src={product.imageSrc}
                          alt={product.imageAlt}
                          className="h-full w-full object-cover object-center group-hover:opacity-75"
                        />
                      </div>
                      <h3 className="mt-4 text-sm text-gray-700">
                        {product.name}
                      </h3>
                      {/* <p className="mt-1 text-lg font-medium text-gray-900">
                        {product.price}
                      </p> */}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Resources;
