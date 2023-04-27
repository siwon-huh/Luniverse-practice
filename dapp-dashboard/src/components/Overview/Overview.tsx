import { useParams } from "react-router";
import Loading from "../Loading";
import {
	Column,
	ContentBox,
	H1,
	H2,
	H3,
	Row,
	Splitter,
} from "./Overview.styled";
import { FaEthereum } from "react-icons/fa";
import useGetAccountBalance from "../../hooks/useGetAccountBalance";
import { useEffect, useState } from "react";
import useGetDailyContractTransactions from "../../hooks/useGetDailyContractActiveTransactions";
import useGetDailyContractActiveAccounts from "../../hooks/useGetDailyContractActiveAccounts";
import { ETH_DECIMALS } from "../../constants";

const Overview = () => {
	/* Hooks */
	const { address } = useParams();
	const [totalActiveAccounts, setTotalActiveAccounts] = useState<number | null>(
		null
	);
	const [totalTransactions, setTotalTransactions] = useState<number | null>(
		null
	);
	const ethBalance = useGetAccountBalance({ address, assetType: "native" });
	const ftBalance = useGetAccountBalance({ address, assetType: "ft" });
	const nftBalance = useGetAccountBalance({ address, assetType: "nft" });
	const recentActiveAccounts = useGetDailyContractActiveAccounts({ address });
	const recentTransactions = useGetDailyContractTransactions({ address });

	useEffect(() => {
		if (!!recentActiveAccounts.data) {
			const result = recentActiveAccounts.data?.data.items.reduce(
				(accumulator, nextItem) => accumulator + Number(nextItem.count),
				0
			);
			setTotalActiveAccounts(result);
		}
	}, [recentActiveAccounts.isLoading]);

	useEffect(() => {
		if (!!recentTransactions.data) {
			const result = recentTransactions.data?.data.items.reduce(
				(accumulator, nextItem) => accumulator + Number(nextItem.count),
				0
			);
			setTotalTransactions(result);
		}
	}, [recentTransactions.isLoading]);

	return (
		<>
			<Column>
				<H3>Searched Address</H3>
				<H1>{address}</H1>
			</Column>
			<Splitter />
			<Row>
				{/* ETH Balance */}
				<ContentBox>
					<Column>
						<H3>ETH</H3>
						{ethBalance.isLoading && <Loading size={30} />}
						<H2>
							<FaEthereum />
							{ethBalance.isError && <>Error</>}
							{!ethBalance.isLoading &&
								!!ethBalance.data &&
								(ethBalance.data?.data.items[0].amount || 0) / ETH_DECIMALS}
						</H2>
					</Column>
				</ContentBox>

				{/* FT Balance */}
				<ContentBox>
					<Column>
						<H3>FT Assets</H3>
						{ftBalance.isLoading && <Loading size={30} />}
						{
							<H2>
								{(!ftBalance.isLoading && ftBalance.data?.data.count) || 0}
							</H2>
						}
					</Column>
				</ContentBox>

				{/* NFT Balance */}
				<ContentBox>
					<Column>
						<H3>NFT Assets</H3>
						{nftBalance.isLoading && <Loading size={30} />}
						{
							<H2>
								{(!nftBalance.isLoading && nftBalance.data?.data.count) || 0}
							</H2>
						}
					</Column>
				</ContentBox>

				{/* Active Accounts Counts (2Weeks) */}
				<ContentBox>
					<Column>
						<H3>Active Accounts Count (14Days)</H3>
						{recentActiveAccounts.isLoading && <Loading size={30} />}
						{
							<H2>
								{(!recentActiveAccounts.isLoading && totalActiveAccounts) || 0}
							</H2>
						}
					</Column>
				</ContentBox>

				{/* Transaction Counts (2Weeks) */}
				<ContentBox>
					<Column>
						<H3>Transactions Count (14Days)</H3>
						{recentActiveAccounts.isLoading && <Loading size={30} />}
						{
							<H2>
								{(!recentActiveAccounts.isLoading && totalTransactions) || 0}
							</H2>
						}
					</Column>
				</ContentBox>
			</Row>
		</>
	);
};

export default Overview;
