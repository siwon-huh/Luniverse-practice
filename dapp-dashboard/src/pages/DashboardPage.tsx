import { useParams } from "react-router-dom";
import styled from "styled-components";
import LineChartSection from "../components/LineChartSection";
import Overview from "../components/Overview";
import useGetDailyContractActiveAccounts from "../hooks/useGetDailyContractActiveAccounts";
import useGetDailyContractTransactions from "../hooks/useGetDailyContractActiveTransactions";
import BalanceTable from "../components/BalanceTable";

const DashboardPage = () => {
    const { address } = useParams();

    const recentActiveAccounts = useGetDailyContractActiveAccounts({
        address: address,
    });
    const recentTransactions = useGetDailyContractTransactions({
        address: address,
    });

    return (
        <Container>
            <Overview />
            <Row>
                {/* Active Account Chart (14Days) */}
                <LineChartSection
                    data={recentActiveAccounts}
                    title="Active Accounts Count (14Days)"
                />
                {/* Transactions Chart (14Days) */}
                <LineChartSection
                    data={recentTransactions}
                    title="Transactions Count (14Days)"
                />
            </Row>
            <Row>
                {/* FT Balance Table */}
                <BalanceTable assetType="ft" />
                {/* NFT Balance Table */}
                <BalanceTable assetType="nft" />
            </Row>
        </Container>
    );
};

const Container = styled.main`
    ${({ theme }) =>
        theme.components.container("column", "flex-start", "flex-start")};
    gap: 2rem;
`;

const Row = styled.div`
    ${({ theme }) =>
        theme.mixins.gridBox("flex-start", "flex-start", "flex-start")}
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
    gap: 2rem;
    flex-wrap: wrap;
`;

export default DashboardPage;
