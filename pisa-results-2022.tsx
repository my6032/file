import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const PISAResults = () => {
  // PISA 2022 데이터 (주요 OECD 국가들)
  const countries = [
    { name: '한국', math: 527, reading: 515, science: 528 },
    { name: '일본', math: 536, reading: 516, science: 547 },
    { name: '에스토니아', math: 510, reading: 511, science: 530 },
    { name: '아일랜드', math: 504, reading: 516, science: 504 },
    { name: '핀란드', math: 484, reading: 490, science: 511 },
    { name: '영국', math: 489, reading: 494, science: 503 },
    { name: '미국', math: 465, reading: 504, science: 499 },
    { name: 'OECD 평균', math: 472, reading: 476, science: 485 }
  ];

  // 도메인과 범위 설정 (그래프의 가독성을 위해)
  const minScore = 450;
  const maxScore = 550;

  return (
    <div className="flex flex-col items-center w-full p-4">
      <h2 className="text-xl font-bold mb-4">2022년 PISA 주요국 학업성취도 비교</h2>
      
      {/* 테이블 */}
      <div className="overflow-x-auto w-full mb-8">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 px-4 py-2">국가</th>
              <th className="border border-gray-300 px-4 py-2">수학</th>
              <th className="border border-gray-300 px-4 py-2">읽기</th>
              <th className="border border-gray-300 px-4 py-2">과학</th>
              <th className="border border-gray-300 px-4 py-2">수학 순위</th>
              <th className="border border-gray-300 px-4 py-2">읽기 순위</th>
              <th className="border border-gray-300 px-4 py-2">과학 순위</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2 font-medium">한국</td>
              <td className="border border-gray-300 px-4 py-2">{countries[0].math}</td>
              <td className="border border-gray-300 px-4 py-2">{countries[0].reading}</td>
              <td className="border border-gray-300 px-4 py-2">{countries[0].science}</td>
              <td className="border border-gray-300 px-4 py-2">2</td>
              <td className="border border-gray-300 px-4 py-2">2</td>
              <td className="border border-gray-300 px-4 py-2">3</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">일본</td>
              <td className="border border-gray-300 px-4 py-2">{countries[1].math}</td>
              <td className="border border-gray-300 px-4 py-2">{countries[1].reading}</td>
              <td className="border border-gray-300 px-4 py-2">{countries[1].science}</td>
              <td className="border border-gray-300 px-4 py-2">1</td>
              <td className="border border-gray-300 px-4 py-2">3</td>
              <td className="border border-gray-300 px-4 py-2">1</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">에스토니아</td>
              <td className="border border-gray-300 px-4 py-2">{countries[2].math}</td>
              <td className="border border-gray-300 px-4 py-2">{countries[2].reading}</td>
              <td className="border border-gray-300 px-4 py-2">{countries[2].science}</td>
              <td className="border border-gray-300 px-4 py-2">4</td>
              <td className="border border-gray-300 px-4 py-2">4</td>
              <td className="border border-gray-300 px-4 py-2">2</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">아일랜드</td>
              <td className="border border-gray-300 px-4 py-2">{countries[3].math}</td>
              <td className="border border-gray-300 px-4 py-2">{countries[3].reading}</td>
              <td className="border border-gray-300 px-4 py-2">{countries[3].science}</td>
              <td className="border border-gray-300 px-4 py-2">5</td>
              <td className="border border-gray-300 px-4 py-2">1</td>
              <td className="border border-gray-300 px-4 py-2">6</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">핀란드</td>
              <td className="border border-gray-300 px-4 py-2">{countries[4].math}</td>
              <td className="border border-gray-300 px-4 py-2">{countries[4].reading}</td>
              <td className="border border-gray-300 px-4 py-2">{countries[4].science}</td>
              <td className="border border-gray-300 px-4 py-2">10</td>
              <td className="border border-gray-300 px-4 py-2">8</td>
              <td className="border border-gray-300 px-4 py-2">4</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">영국</td>
              <td className="border border-gray-300 px-4 py-2">{countries[5].math}</td>
              <td className="border border-gray-300 px-4 py-2">{countries[5].reading}</td>
              <td className="border border-gray-300 px-4 py-2">{countries[5].science}</td>
              <td className="border border-gray-300 px-4 py-2">9</td>
              <td className="border border-gray-300 px-4 py-2">7</td>
              <td className="border border-gray-300 px-4 py-2">7</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">미국</td>
              <td className="border border-gray-300 px-4 py-2">{countries[6].math}</td>
              <td className="border border-gray-300 px-4 py-2">{countries[6].reading}</td>
              <td className="border border-gray-300 px-4 py-2">{countries[6].science}</td>
              <td className="border border-gray-300 px-4 py-2">25</td>
              <td className="border border-gray-300 px-4 py-2">6</td>
              <td className="border border-gray-300 px-4 py-2">8</td>
            </tr>
            <tr className="bg-gray-100">
              <td className="border border-gray-300 px-4 py-2 font-medium">OECD 평균</td>
              <td className="border border-gray-300 px-4 py-2">{countries[7].math}</td>
              <td className="border border-gray-300 px-4 py-2">{countries[7].reading}</td>
              <td className="border border-gray-300 px-4 py-2">{countries[7].science}</td>
              <td className="border border-gray-300 px-4 py-2">-</td>
              <td className="border border-gray-300 px-4 py-2">-</td>
              <td className="border border-gray-300 px-4 py-2">-</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      {/* 그래프 */}
      <div className="w-full h-96 mb-8">
        <h3 className="text-lg font-semibold mb-2 text-center">PISA 2022 학업성취도 비교</h3>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={countries}
            margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" angle={-45} textAnchor="end" height={60} />
            <YAxis domain={[minScore, maxScore]} />
            <Tooltip />
            <Legend />
            <Bar dataKey="math" name="수학" fill="#8884d8" />
            <Bar dataKey="reading" name="읽기" fill="#82ca9d" />
            <Bar dataKey="science" name="과학" fill="#ffc658" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      {/* 한국과 OECD 평균 비교 그래프 */}
      <div className="w-full h-72 mb-4">
        <h3 className="text-lg font-semibold mb-2 text-center">한국과 OECD 평균 비교</h3>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={[
              {category: '수학', 한국: countries[0].math, OECD평균: countries[7].math},
              {category: '읽기', 한국: countries[0].reading, OECD평균: countries[7].reading},
              {category: '과학', 한국: countries[0].science, OECD평균: countries[7].science},
            ]}
            margin={{ top: 20, right: 30, left: 20, bottom: 30 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="category" />
            <YAxis domain={[minScore, maxScore]} />
            <Tooltip />
            <Legend />
            <Bar dataKey="한국" fill="#FF8042" />
            <Bar dataKey="OECD평균" fill="#0088FE" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      <div className="text-sm text-gray-600 mt-2 italic">
        출처: OECD, PISA 2022 결과
      </div>
    </div>
  );
};

export default PISAResults;
