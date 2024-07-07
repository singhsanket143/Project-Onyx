import {
  LightningBoltIcon,
  PuzzleIcon,
  CogIcon,
  KeyIcon
} from "@heroicons/react/outline";

const features = [
  {
    name: "Data structures and Algorithms",
    icon: PuzzleIcon,
  },
  {
    name: "Low Level Design and Design Patterns",
    icon: KeyIcon,
  },
  {
    name: "Web Performance and React Patterns",
    icon: CogIcon,
  },
  {
    name: "Computer Science Fundamentals",
    icon: LightningBoltIcon,
  },
];

function Features() {
  return (
    <>
      <div className="grid grid-cols-1 gap-3 my-12">
        {features.map(({ icon: Icon, ...feature }, i) => (
          <div
            className="flex items-center space-x-4"
            key={feature.name.split(" ").join("-")}
          >
            <div>
              <Icon
                className="block w-8 h-8"
                style={{ height: 24, width: 24 }}
                aria-hidden="true"
              />
            </div>
            <div>
              <div className="my-0 font-small dark:text-white">
                {feature.name}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Features;
