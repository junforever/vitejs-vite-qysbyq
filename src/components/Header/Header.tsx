import {
  CategoriesType,
  CategoryList,
  GetCategoriesKeys,
  GetLanguageKeys,
  GetRulesKeys,
  LanguageList,
  LanguagesType,
  RuleList,
  RulesType,
} from '../../constants';
import styles from './Header.module.css';
import {
  setLanguage,
  setRule,
  useAppDispatch,
  useAppSelector,
  setCategory,
} from '../../store';

export const Header = ({
  title,
  languages,
  rules,
  categories,
}: {
  title: string;
  languages: LanguageList;
  rules: RuleList;
  categories: CategoryList;
}) => {
  const { rule, language, category } = useAppSelector(state => state.filters);
  const dispatch = useAppDispatch();

  const onLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = event.currentTarget.value as LanguagesType;
    dispatch(setLanguage({ value: lang, label: GetLanguageKeys(lang) }));
  };

  const onRuleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const rul = event.currentTarget.value as RulesType;
    dispatch(setRule({ value: rul, label: GetRulesKeys(rul) }));
  };

  const onCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const cat = event.currentTarget.value as CategoriesType;
    dispatch(setCategory({ value: cat, label: GetCategoriesKeys(cat) }));
  };

  return (
    <div className="flex flex-col px-12 py-10">
      <h1 className="font-extrabold text-white text-5xl">{title}</h1>
      <div className="flex flex-col gap-y-2 sm:gap-y-0 items-start sm:flex-row  sm:justify-between align-top mt-8">
        <div className="flex flex-col gap-y-3">
          <div className={styles.itemsContainer}>
            <label className={styles.formControl} htmlFor="category">
              Category:
            </label>
            <div className={styles.customSelect}>
              <select
                id="category"
                className={styles.select}
                name="category"
                value={category?.value}
                onChange={onCategoryChange}>
                {categories.map(cat => (
                  <option key={cat.label} value={cat.value}>
                    {cat.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-3">
          <div className={styles.itemsContainer}>
            <label className={styles.formControl} htmlFor="language">
              Language:
            </label>
            <div className={styles.customSelect}>
              <select
                id="language"
                className={styles.select}
                name="language"
                value={language?.value}
                onChange={onLanguageChange}>
                {languages.map(language => (
                  <option key={language.label} value={language.value}>
                    {language.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className={styles.itemsContainer}>
            <label className={styles.formControl} htmlFor="rule">
              Rule:
            </label>
            <div className={styles.customSelect}>
              <select
                id="rule"
                className={styles.select}
                name="rule"
                value={rule?.value}
                onChange={onRuleChange}>
                {rules.map(rule => (
                  <option key={rule.label} value={rule.value}>
                    {rule.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
