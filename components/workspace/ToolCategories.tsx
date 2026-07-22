export default function ToolCategories() {
  const sections = [
    {
      title: "🧹 Basic Cleaning",
      tools: [
        "Remove Empty Rows",
        "Remove Empty Columns",
        "Remove Duplicates",
        "Trim Spaces",
      ],
    },
    {
      title: "📝 Text Tools",
      tools: [
        "UPPERCASE",
        "lowercase",
        "Title Case",
        "Remove Special Characters",
      ],
    },
    {
      title: "📊 Data Tools",
      tools: [
        "Find & Replace",
        "Split Columns",
        "Merge Columns",
        "Sort Data",
      ],
    },
  ];

  return (
    <div className="mt-10 bg-white rounded-2xl shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6">
        Available Tools
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {sections.map((section) => (
          <div
            key={section.title}
            className="border rounded-xl p-5"
          >
            <h3 className="font-bold text-lg mb-4">
              {section.title}
            </h3>

            <ul className="space-y-2">
              {section.tools.map((tool) => (
                <li
                  key={tool}
                  className="text-gray-700"
                >
                  • {tool}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}