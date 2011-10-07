describe("sample javascript", function() {
	it("should return greater of two numbers when get_greater_of_numbers is called", function() {
		var sample = new SampleJavaScript();
		
		expect(2).toEqual(sample.get_greater_of_numbers(1, 2));
		expect(2).toEqual(sample.get_greater_of_numbers(2, 1));
		expect(2).toEqual(sample.get_greater_of_numbers(2, 2));
	});
});
