import s from './Taba.module.scss';

export const Taba = ({ selectedTab, onTabChange }: TabaProps) => {
  return (
    <div className={s.tabs}>
      <p
        className={`${s.tab} ${selectedTab === 'clan' ? s.active : ''}`}
        onClick={() => onTabChange('clan')}
      >
        Кланы
      </p>
      <p
        className={`${s.tab} ${selectedTab === 'connection' ? s.active : ''}`}
        onClick={() => onTabChange('connection')}
      >
        Связь
      </p>
      <p
        className={`${s.tab} ${selectedTab === 'others' ? s.active : ''}`}
        onClick={() => onTabChange('others')}
      >
        Прочее
      </p>
    </div>
  );
};

export type TabKey = 'clan' | 'others' | 'connection';

interface TabaProps {
  selectedTab: TabKey;
  onTabChange: (key: TabKey) => void;
}