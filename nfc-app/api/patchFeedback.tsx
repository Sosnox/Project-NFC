export const patchFeedback = async (valueInput: any) => {
    const response = await fetch("http://210.246.215.173:3000/api/patchFeedback", {
        method: "PATCH",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(valueInput),
    });
    return response.json();
    }