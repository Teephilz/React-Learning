const callouts = [
    {
      name: 'Desk and Office',
      description: 'Office accessories',
      imageSrc: 'https://media.istockphoto.com/id/1165916723/photo/the-setup-for-success.jpg?s=612x612&w=0&k=20&c=40J6tNYEPe3PZm9cprMVIMoC9BiUXH3c8OKCS5USGC8=',
      imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
      href: '#',
    },
    {
      name: 'Self-Improvement',
      description: 'Notebooks and Journals',
      imageSrc: 'data:image/jpeg;base64,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',
      imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
      href: '#',
    },
    {
      name: 'Travel',
      description: 'Daily commute essentials',
      imageSrc: 'https://image.made-in-china.com/202f0j00rQgRihbMszpw/ODM-OEM-Promotion-Double-Wall-Stainless-Steel-Office-Water-Bottle.jpg',
      imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
      href: '#',
    },
  ]
  
  export default function MyCollection() {
    return (
      <div className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 className="text-2xl font-bold text-gray-900">Collections</h2>
  
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {callouts.map((callout, index) => (
                <div key={callout.name} onClick={(event)=> console.log(`${callout.name} ${index}`)} className="group relative">
                  <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                    <img
                      src={callout.imageSrc}
                      alt={callout.imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 className="mt-6 text-sm text-gray-500">
                    <a href={callout.href}>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-gray-900">{callout.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }