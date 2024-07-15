export const report_types = ['test-report', 'real-report'];
const reportTypesMap = {
    'test-report': 'Test Report',
    'real-report': 'Real Report',
};
export type ReportType = 'test-report' | 'real-report';

export const getReportType = (type: ReportType) => reportTypesMap[type];