import { Button, Container, Form, Card, Navbar } from 'react-bootstrap';

function MainPage() {
    return (
        <div>
            <Container className='container-md' id='background'>
                <Navbar bg='light' className='md-4'>
                    <Container>
                        <Navbar.Brand>X-search</Navbar.Brand>
                    </Container>
                </Navbar>
                <Container className='container-md' id='intro'>
                    <p>
                        이 프로젝트는 흉부 X-ray에서 나오는 의사 소견을 학습하여 흉부와 관련된 증상을 입력할 경우<br/>
                        그 문제가 질병과 관련된 문제인지를 예측해주는 모델입니다.
                    </p>
                    <Button> 자세히 보기 </Button>
                </Container>
                <Container className='container-md' id='form'>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label>당신의 앓고 있는 증상은 무엇입니까?</Form.Label>
                            <Form.Control type="text" placeholder="증상을 입력하세요" />
                        </Form.Group>
                        <Button variant="primary">입력하기</Button>
                    </Form>
                </Container>
                <Container className='continer-md' id='result'>
                    <Card>폐질환일 가능성이 있습니다.</Card>
                    <img alt='그래프'></img>
                </Container>
            </Container>
        </div>
    )
}

export default MainPage;