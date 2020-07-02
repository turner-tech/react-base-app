import React from 'react';
import { Link } from 'react-router-dom';
import { Divider, List, Typography } from 'antd';

const data = ['Home', 'Games', 'Github', 'StarMatch', 'GenericForm', 'NavBar', 'Counter'];

export function ComponentList() {
    return (
        <nav>
            <Divider orientation="left">Components List</Divider>
            <List
                size="large"
                bordered
                dataSource={data}
                renderItem={(item) => (
                    <List.Item>
                        <Link to={`/${item}`}>
                            <li>{item}</li>
                        </Link>
                    </List.Item>
                )}
            />
        </nav>
    );
}
