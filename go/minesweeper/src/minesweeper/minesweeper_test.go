package minesweeper_test

import (
	"testing"

	"bitbucket.sprinteins.com/users/trusz/repos/code-dojo/go/minesweeper/src/minesweeper"
)

func TestMinesweeper(t *testing.T) {

	tests := []renderingTest{
		{
			desc:      "1x1",
			dimension: 1,
			expected:  "■",
		},
		{
			desc:      "2x2",
			dimension: 2,
			expected:  "■■\n■■",
		},
		{
			desc:      "4x4",
			dimension: 4,
			expected:  "■■■■\n■■■■\n■■■■\n■■■■",
		},
		{
			desc:      "2x1",
			dimension: 2,
			expected:  "■■\n",
		},
	}

	for _, tt := range tests {
		t.Run(tt.desc, func(t *testing.T) { testRendering(t, tt) })
	}

}

func testRendering(t *testing.T, tt renderingTest) {
	board := minesweeper.NewBoard(tt.dimension)

	var renderedBoard string = board.Render()

	if renderedBoard != tt.expected {
		t.Errorf("expected: %s, got: %s\n", tt.expected, renderedBoard)
	}
}

type renderingTest struct {
	desc      string
	dimension int
	expected  string
}
