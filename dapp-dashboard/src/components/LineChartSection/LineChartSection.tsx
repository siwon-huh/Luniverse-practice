import React, { useMemo } from "react";
import { Container, Title } from "./LineChartSection.styled";
import { useTheme } from "styled-components";
import {
    ResponsiveContainer,
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
} from "recharts";
import { UseQueryResult } from "@tanstack/react-query";
import Loading from "../Loading";

interface Item {
    date: string;
    count: string;
}

type Props = { data: UseQueryResult<ResponseWithItems<Item>>; title: string };

const LineChartSection: React.FC<Props> = ({ data, title }) => {
    /* Hooks */
    const theme: any = useTheme();
    const chartData = useMemo(() => data, [data]);

    if (!chartData) return <></>;
    if (chartData.isLoading) return <Loading />;
    if (chartData.isError) return null;

    return (
        <Container>
            <Title> {title} </Title>
            <ResponsiveContainer width={"100%"} height={"100%"}>
                <LineChart data={chartData.data.data.items}>
                    <Line
                        type="monotone"
                        dataKey="count"
                        stroke={theme.color.quaternary}
                        strokeWidth={"3px"}
                        activeDot={{ r: 5 }}
                    />
                    <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                </LineChart>
            </ResponsiveContainer>
        </Container>
    );
};

export default LineChartSection;
