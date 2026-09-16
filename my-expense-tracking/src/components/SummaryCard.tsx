type SummaryCardProps = {
    title: string;
    value: string;
};

function SummaryCard({ title, value }: SummaryCardProps) {
    return (
        <div>
            <h2>{title}</h2>
            <p>{value}</p>
        </div>
    );
}
export default SummaryCard;