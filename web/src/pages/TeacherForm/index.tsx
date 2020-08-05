import React, { useState, FormEvent } from 'react';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg';

import './styles.css';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';

const TeacherForm: React.FC = () => {
	const [name, setName] = useState('');
	const [avatar, setAvatar] = useState('');
	const [whatsapp, setWhatsapp] = useState('');
	const [bio, setBio] = useState('');
	const [subject, setSubject] = useState('');
	const [cost, setCost] = useState('');

	const scheduleItem = { week_day: 0, from: '', to: '' };
	const [scheduleItems, setScheduleItems] = useState([scheduleItem]);

	const history = useHistory();

	const addNewScheduleItem = () => {
		const items = [...scheduleItems, scheduleItem];
		setScheduleItems(items);
	};

	const setSecheduleItemValue = (
		position: number,
		field: string,
		value: string
	) => {
		const updatedScheduleItems = scheduleItems.map((item, index) => {
			if (index === position) {
				return { ...item, [field]: value };
			}
			return item;
		});

		setScheduleItems(updatedScheduleItems);
	};

	const handleSubmit = async (event: FormEvent) => {
		event.preventDefault();

		try {
			await api.post('classes', {
				name,
				avatar,
				whatsapp,
				bio,
				subject,
				cost: +cost,
				schedule: scheduleItems,
			});

			alert('Cadastrado com sucesso');

			history.push('/');
		} catch (error) {
			alert('Erro no cadastro');
		}
	};

	return (
		<div id='page-teacher-form' className='container'>
			<PageHeader
				title='Que incrível que você quer dar aulas.'
				description='O primeiro passo é preencher esse formulário de inscrição'
			></PageHeader>

			<main>
				<form onSubmit={handleSubmit}>
					<fieldset>
						<legend>Seus dados</legend>

						<Input
							label='Nome completo'
							name='name'
							value={name}
							onChange={(event) => setName(event.target.value)}
						/>

						<Input
							label='Avatar'
							name='avatar'
							value={avatar}
							onChange={(event) => setAvatar(event.target.value)}
						/>

						<Input
							label='WhatsApp'
							name='whatsapp'
							value={whatsapp}
							onChange={(event) => setWhatsapp(event.target.value)}
						/>

						<Textarea
							label='Biografia'
							name='bio'
							value={bio}
							onChange={(event) => setBio(event.target.value)}
						/>
					</fieldset>

					<fieldset>
						<legend>Sobre a aula</legend>

						<Select
							label='Matéria'
							name='subject'
							value={subject}
							onChange={(event) => setSubject(event.target.value)}
							options={[
								{ value: 'Artes', label: 'Artes' },
								{ value: 'Biologia', label: 'Biologia' },
								{ value: 'Português', label: 'Português' },
								{ value: 'Inglês', label: 'Inglês' },
								{ value: 'Física', label: 'Física' },
								{ value: 'Química', label: 'Química' },
								{ value: 'Geografia', label: 'Geografia' },
								{ value: 'História', label: 'História' },
							]}
						/>

						<Input
							label='Custo da sua hora por aula'
							name='cost'
							value={cost}
							onChange={(event) => setCost(event.target.value)}
						/>
					</fieldset>

					<fieldset>
						<legend>
							Horários disponíveis
							<button type='button' onClick={addNewScheduleItem}>
								+ Novo horário
							</button>
						</legend>

						{scheduleItems.map((scheduleItem, index) => (
							<div className='schedule-item' key={scheduleItem.week_day}>
								<Select
									label='Dia da semana'
									name='week_day'
									onChange={(event) =>
										setSecheduleItemValue(index, 'week_day', event.target.value)
									}
									options={[
										{ value: '0', label: 'Domingo' },
										{ value: '1', label: 'Segunda-feira' },
										{ value: '2', label: 'Terça-feira' },
										{ value: '3', label: 'Quarta-feira' },
										{ value: '4', label: 'Quinta-feira' },
										{ value: '5', label: 'Sexta-feira' },
										{ value: '6', label: 'Sábado' },
									]}
								/>
								<Input
									label='Das'
									name='from'
									type='time'
									onChange={(event) =>
										setSecheduleItemValue(index, 'from', event.target.value)
									}
								/>
								<Input
									label='Até'
									name='to'
									type='time'
									onChange={(event) =>
										setSecheduleItemValue(index, 'to', event.target.value)
									}
								/>
							</div>
						))}
					</fieldset>

					<footer>
						<p>
							<img src={warningIcon} alt='Aviso importante' />
							Importante! <br />
							Preencha todos os dados
						</p>
						<button type='submit'> Salvar cadastro</button>
					</footer>
				</form>
			</main>
		</div>
	);
};

export default TeacherForm;
