import { DrawerProps } from 'antd';
import { AddToQueryHOCProps } from 'components/Logs/AddToQueryHOC';
import { ActionItemProps } from 'container/LogDetailedView/ActionItem';
import { IField } from 'types/api/logs/fields';
import { ILog } from 'types/api/logs/log';

import { VIEWS } from './constants';

export type LogDetailProps = {
	log: ILog | null;
	selectedTab: VIEWS;
	isListViewPanel?: boolean;
	listViewPanelSelectedFields?: IField[] | null;
} & Pick<AddToQueryHOCProps, 'onAddToQuery'> &
	Partial<Pick<ActionItemProps, 'onClickActionItem'>> &
	Pick<DrawerProps, 'onClose'>;
