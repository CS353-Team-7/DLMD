import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './drawer.css';
import { Drawer, Form, Button, Col, Row, Input, Select, DatePicker } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
//a
const { Option } = Select;

export  default  class DrawerForm extends React.Component {
    state = { visible: false };

    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    render() {
        return (
            <>
                <Button type="primary" onClick={this.showDrawer}>
                    <SettingOutlined />Setting
                </Button>
                <Drawer
                    title="Modify personal information "
                    width={720}
                    onClose={this.onClose}
                    visible={this.state.visible}
                    bodyStyle={{ paddingBottom: 80 }}
                    footer={
                        <div
                            style={{
                                textAlign: 'right',
                            }}
                        >
                            <Button onClick={this.onClose} style={{ marginRight: 8 }}>
                                Cancel
                            </Button>
                            <Button onClick={this.onClose} type="primary">
                                Submit
                            </Button>
                        </div>
                    }
                >
                    <Form layout="vertical" hideRequiredMark>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item
                                    name="telephone"
                                    label="Telephone"
                                    rules={[{ required: true, message: 'Please enter telephone number' }]}
                                >
                                    <Input placeholder="Please enter telephone number" />
                                </Form.Item>
                            </Col>

                        </Row>


                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item
                                    name="address"
                                    label="Address"
                                    rules={[{ required: true, message: 'Please enter address' }]}
                                >
                                    <Input placeholder="Please enter address" />
                                </Form.Item>
                            </Col>
                        </Row>

                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item
                                    name="favoritesport"
                                    label="Favorite sport"
                                    rules={[{ required: true, message: 'Please enter favorite sport' }]}
                                >
                                    <Input placeholder="Please enter favorite sport" />
                                </Form.Item>
                            </Col>

                        </Row>

                        <Row gutter={16}>
                            <Col span={24}>
                                <Form.Item
                                    name="description"
                                    label="Info"
                                    rules={[
                                        {
                                            required: true,
                                            message: 'please enter Info',
                                        },
                                    ]}
                                >
                                    <Input.TextArea rows={4} placeholder="please enter url description" />
                                </Form.Item>
                            </Col>
                        </Row>
                    </Form>
                </Drawer>
            </>
        );
    }
}
