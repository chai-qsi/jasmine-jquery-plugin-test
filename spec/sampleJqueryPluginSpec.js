describe("Jquery plugin tests", function() {
	beforeEach(function () {
		//jasmine.getFixtures().fixturesPath = 'javascripts/fixtures';
		//Default path to fixtures will be spec/javascripts/fixtures/
		loadFixtures('fixture1.html');
		
		this.addMatchers({
			toBeColored: function() {
				var isColored = true;

				this.actual.find("tr:even").each(function (index, tr) {
					isColored = $(tr).hasClass('odd') === false && $(tr).hasClass('even');
					if (!isColored) {
						return;
					};
				});

				this.actual.find("tr:odd").each(function (index, tr) {
					isColored = $(tr).hasClass('odd') && $(tr).hasClass('even') === false;
					if (!isColored) {
						return;
					};
				});

				return isColored;
			}
		});
	});
	
	describe("sample jquery plugin", function() {
		it("should apply classes even or odd to alternate table rows", function() {
			var table = $("#table");
			table.colorAltRows();
			expect(table).toBeColored();
		});
		it("should be chainable", function() {
			var table = $("#table");
			table.colorAltRows().addClass("fakeclass");
			expect(table).toHaveClass("fakeclass");
		});
	});
});
