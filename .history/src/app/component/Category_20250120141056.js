'use client'
export default function Category() {
    const option = [
        { value: 0, label: '카테고리를 선택해주세요.' },
        { value: 1, label: '직장' },
        { value: 2, label: '연애' },
        { value: 3, label: '취업/진로' },
        { value: 4, label: '가족' },
        { value: 5, label: '결혼/육아' },
        { value: 6, label: '친구' },
        { value: 7, label: '학업/고시' },
        { value: 8, label: '중독' },
        { value: 9, label: '사업/금전' },
        { value: 10, label: '질병/질환' }
    ]

    let [category, setCategory] = useState('');

    //카테고리 셀렉값 가져오기
    const handleSelect = (e) => {
        setCategory(e.target.value);
    };

    return (
        <select onChange={handleSelect} value={category}>
            {
                option.map((data, i) => {
                    return (
                        <option key={i} value={data.label}>{data.label}</option>
                    )
                })
            }
        </select>
    )
}