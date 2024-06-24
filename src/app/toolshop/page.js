import Background from "@/components/background/mainBackground";

const products = [
  {
    id: 1,
    name: "압축툴 ㅍㅍ",
    href: "#",
    price: "18000원",
    imageSrc:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRoZk2yWzrHtmlJrKbVxNbMoF3YXCFSgFAgqpJ_-WeA9d6qg88QXh85VbmBfnhCnvXt_8yrN2jr2nTp9ZhnF_dnBh4aqxzHa2nOgG0DhhcmJFvEBNg0uxcZDA&usqp=CAE",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "압축툴 ㅍㅍ",
    href: "#",
    price: "20000원",
    imageSrc:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSNlO3DzBKnQb3EBrls4LwaacOR825HIE8NaCh3bAkkaNn8tjuqrFtEGJjKSRK7MuZ6r4Jnc0Hiovx88sn-U8vWdkHKHCak0WyITo--YxdZtOG4r_R39i8nxQ&usqp=CAE",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "압축툴 ㅍㅍ",
    href: "#",
    price: "5000원",
    imageSrc:
      "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTTO8lQIKcwXNxKcXDQ0GdR7ew0yQgTr40awMPJ0UaU_c2PWUoYt8CXrDcXWm6SSZn7dVJ7zVJTXtlyUE0dDUY7MVeHVJOEPk2qaHCKw9db7CnQH_3MeYOEwA&usqp=CAE",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "압축툴 ㅍㅍ",
    href: "#",
    price: "50000원",
    imageSrc:
      "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQV0LVxfcYKfWug4g3H4Y4p5E27ZM48kikK25Nm4qE5b2QXxKGurdLV5MZO5mpoedW9Us8SOoF1ay3FZC58sR5v4ZMAThhkOA&usqp=CAE",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
];

export default function ToolshopPage() {
  return (
    <Background>
      <h2 className="sr-only">Products</h2>

      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <a key={product.id} href={product.href} className="group">
            <div className="w-full overflow-hidden bg-gray-200 rounded-lg aspect-h-1 aspect-w-1 xl:aspect-h-8 xl:aspect-w-7">
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="object-cover object-center w-full h-full group-hover:opacity-75"
              />
            </div>
            <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">
              {product.price}
            </p>
          </a>
        ))}
      </div>
    </Background>
  );
}
