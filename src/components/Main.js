import React from 'react';
import PropTypes from 'prop-types';
import FormSection from './FormSection';
import Article from './Article';

export default function Main({ onFormSubmit }) {
  return (
    <main>
      <section className="info">
        <Article
          title="О проекте"
          content={[
            `Мы знаем, что наши дети постоянно существуют в режиме непрекращающегося
            творческого процесса. Мы видим это, когда ребёнок что-то напевает,
            когда он бесконечно рисует, когда придумывает истории, когда разговаривает
            с едой и игрушками — дети постоянно включены и что-то изобретают. Родители
            часто недооценивают это спонтанное творчество ребёнка. Это не плохо, просто
            мы привыкаем к этому. Давайте попробуем внимательнее присмотреться к нашим детям.`,
            `Мы запускаем проект «ТУРБИНА», который открывает работу настоящего музыкального
            лейбла на базе «Маршака». В рамках «ТУРБИНЫ» лучшие современные инди-музыканты
            пишут свои песни на стихи, написанные детьми. Здесь важно — мы не заставляем наших
            детей садиться и писать поэзию, мы говорим о том, что родителям стоит быть более
            внимательными и чуткими к своим детям. Именно так мы сможем получить тексты, которые
            перестанут быть детскими, не будут осмыслены как взрослые — поэзия, которая сокращает
            дистанцию между взрослостью и детством, где спонтанное детское творчество и бессознательное,
            замеченное родителем, становится общественным культурным достоянием.`,
          ]} />
        <Article
          title="Как это работает"
          content={[
            ` Вы можете прислать нам тексты, родившиеся у ваших детей, которые вы записали и считаете,
            что это сильное высказывание. Мы собираем пул таких текстов и передаём их музыкантам. Артисты
            создают музыку на эти стихи. Мы продюсируем выпуск трека, возможно съёмки клипа и так далее. 
            Мы всегда указываем автора стихотворений внутри релиза: Хадн Дадн feat. Варя Карпова и Федя Быстров — Контур.`,
          ]} />
        <Article
          title="Тезисы"
          content={[
            '— Дети никогда не прекращают творить и круто стараться быть на них похожими в этом',
            '— Детское бессознательное помогает родителям понять, что происходит внутри семьи',
            '— Не существует детской и взрослой поэзии. Существует мысль и чувство, зафиксированное в ней',
            '— Дети получают невероятное удовольствие и мотивацию от того, что их творчество востребовано сверстниками и взрослыми.',
          ]} />
      </section>
      <FormSection
        onFormSubmit={onFormSubmit} />
    </main>
  );
}
Main.propTypes = {
  onFormSubmit: PropTypes.string.isRequired,
};
