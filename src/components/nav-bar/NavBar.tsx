import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

export function NavBar() {
	return (
		<nav>
			<Menu theme='dark' mode='horizontal' defaultSelectedKeys={['1']}>
				<Menu.Item key='1'>
					<Link to='/'>
						<li>Home</li>
					</Link>
				</Menu.Item>
				<Menu.Item key='2'>
					<Link to='/games'>
						<li>Games</li>
					</Link>
				</Menu.Item>
				<Menu.Item key='3'>
					<Link to='/github'>
						<li>Github Card App</li>
					</Link>
				</Menu.Item>
				<Menu.Item key='4'>
					<Link to='/components'>
						<li>Components List</li>
					</Link>
				</Menu.Item>
			</Menu>
		</nav>
	);
}
