// react-router-dom
import { useNavigate } from 'react-router-dom';

let navigate = useNavigate();
navigate('/home');

// Next.js
import { useRouter } from 'next/router';

const router = useRouter();
router.push('/home');
