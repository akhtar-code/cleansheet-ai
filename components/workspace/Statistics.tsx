import StatCard from "../cards/StatCard";

type StatisticsProps = {
  totalRows: number;
  totalColumns: number;
  duplicatesRemoved: number;
  emptyRowsRemoved: number;
  emptyColumnsRemoved: number;
};

export default function Statistics({
  totalRows,
  totalColumns,
  duplicatesRemoved,
  emptyRowsRemoved,
  emptyColumnsRemoved,
}: StatisticsProps) {
  return (
    <section className="mt-8">

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-5">

        <StatCard
          title="Rows"
          value={totalRows}
          color="text-blue-600"
        />

        <StatCard
          title="Columns"
          value={totalColumns}
          color="text-indigo-600"
        />

        <StatCard
          title="Duplicates"
          value={duplicatesRemoved}
          color="text-green-600"
        />

        <StatCard
          title="Empty Rows"
          value={emptyRowsRemoved}
          color="text-red-500"
        />

        <StatCard
          title="Empty Columns"
          value={emptyColumnsRemoved}
          color="text-orange-500"
        />

      </div>

    </section>
  );
}