import Loading from "../Loading";
import {
    ButtonBox,
    Column,
    Container,
    EmptyText,
    NextButton,
    PageNum,
    Pagination,
    PrevButton,
    Row,
    RowsPerPageSelect,
    TableBox,
    Title,
} from "./BalanceTable.styled";
import { useParams } from "react-router-dom";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import useGetAccountBalance from "../../hooks/useGetAccountBalance";
import usePagination from "../../hooks/usePagination";
import { paginationOptions, tableHeaders } from "./BalanceTable.data";

interface Props {
    assetType: string;
}

const BalanceTable: React.FC<Props> = ({ assetType }) => {
    /* Hooks */
    const { address } = useParams();
    const {
        pageNum,
        rowsPerPage,
        handleOnClickPageButton,
        handleOnChangeRowsPerPage,
    } = usePagination();
    const queryResult = useGetAccountBalance({
        address,
        assetType,
        page: pageNum,
        rpp: rowsPerPage,
    });

    if (queryResult.isLoading) return <Loading size={60} />;
    if (queryResult.isError) return null;

    const isEmpty =
        queryResult.data.data.count === 0 ||
        queryResult.data.data?.items?.length === 0;

    return (
        <Container>
            <Title>{assetType.toUpperCase()} Assets</Title>
            <TableBox>
                <Column className="header">
                    {tableHeaders.map((header) => (
                        <Row key={header}>
                            <h1>{header}</h1>
                        </Row>
                    ))}
                </Column>

                {isEmpty && <EmptyText>Empty Items</EmptyText>}
                {!isEmpty &&
                    queryResult.data.data.items.map((item, index) => (
                        <Column key={item.asset.name + index}>
                            <Row>
                                <h2>
                                    {index + 1 + (pageNum - 1) * rowsPerPage}
                                </h2>
                            </Row>
                            <Row>
                                <h2>{item.asset.name}</h2>
                            </Row>
                            <Row>
                                <h2>{item.asset.symbol}</h2>
                            </Row>
                            <Row>
                                <h2>{item.asset.contract}</h2>
                            </Row>
                            <Row>
                                <h2>
                                    {item.asset?.decimals
                                        ? item.amount /
                                          Math.pow(10, item.asset.decimals)
                                        : item.amount}
                                </h2>
                            </Row>
                        </Column>
                    ))}
                <Column>
                    <Pagination>
                        <RowsPerPageSelect
                            value={rowsPerPage}
                            onChange={handleOnChangeRowsPerPage}
                        >
                            {paginationOptions.map((optionValue) => (
                                <option key={optionValue} value={optionValue}>
                                    {optionValue}
                                </option>
                            ))}
                        </RowsPerPageSelect>

                        <ButtonBox>
                            <PrevButton
                                className="prev-button"
                                onClick={handleOnClickPageButton}
                                disabled={pageNum === 1}
                            >
                                <GrFormPrevious />
                            </PrevButton>
                            <PageNum>{pageNum}</PageNum>
                            <NextButton
                                className="next-button"
                                onClick={handleOnClickPageButton}
                                disabled={
                                    pageNum * rowsPerPage >=
                                    queryResult.data.data.count
                                }
                            >
                                <GrFormNext />
                            </NextButton>
                        </ButtonBox>
                    </Pagination>
                </Column>
            </TableBox>
        </Container>
    );
};

export default BalanceTable;
