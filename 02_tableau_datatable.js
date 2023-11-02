tableau.extensions.initializeAsync().then(() => {

	const worksheet = tableau.extensions.dashboardContent.dashboard.worksheets[0];
	console.log(worksheet.name);

	worksheet.getSummaryDataReaderAsync().then((dataTableReader) => {
		console.log("DataTableReader",dataTableReader);

		dataTableReader.getAllPagesAsync().then((dataTable) => {
			console.log("dataTable",dataTable);

			const columns = dataTable.columns;
			console.log("columns",columns);

			const table = document.getElementById('data-table').getElementsByTagName('thead')[0];
			const row = table.insertRow();
			c=0

			const columnNames = columns.map((column) => column.fieldName);
			console.log("Column Names:", columnNames);

			columnNames.forEach((element) => {
				const cell = row.insertCell(c);
				cell.innerHTML = element;
				c++;
			});



			const rows =  dataTable.data;
			console.log("rows",rows);

			rows.forEach(row => {

				const table2 = document.getElementById('data-table').getElementsByTagName('tbody')[0];
				const row2 = table.insertRow();
				c=0
				
				const rowValues = row.map((value) => value.formattedValue);
				console.log("Rows Values:", rowValues);
				
				rowValues.forEach((element) => {
					 const cell = row2.insertCell(c);
					 cell.innerHTML = element;
					 c++;
				});
				
			});
		});
	});
});